import React, {
  FC,
  useContext,
  createContext,
  ReactNode,
  Children,
  useState,
  ReactElement,
  useMemo,
  useRef,
  useEffect,
  RefObject,
} from 'react';
import useMeasure from 'react-use-measure';
import { ResizeObserver as polyfill } from '@juggle/resize-observer';
import { animated, useSpring } from 'react-spring';
import { TabPanelProps, TabProps, ContextProps, TabItem } from './types';
import { relative } from 'path';

const TabContext = createContext<ContextProps>({ toggleActiveKey: () => {} });

function countChild(children: ReactNode) {
  return Children.toArray(children).length;
}

function getFirstKey(children: ReactNode): string {
  return (Children.toArray(children)[0] as ReactElement<TabPanelProps>).props
    .panelKey;
}

function setTabPanelChildren(
  childNode: ReactNode,
  active: string
): { TabPanelChildren: Array<TabItem>; tabs: Array<string> } {
  const TabPanelChildren: Array<TabItem> = [];
  const tabs: Array<string> = [];
  Children.toArray(childNode).forEach(
    ({
      props: { children, panelKey },
    }: ReactElement<TabPanelProps & { children: ReactNode }>) => {
      tabs.push(panelKey);
      TabPanelChildren.push({
        tabPanelKey: panelKey,
        content: children,
        active: active === panelKey,
      });
    }
  );

  return { TabPanelChildren, tabs };
}

function AnimatedBar(size: { left: number; width: number }) {
  return useSpring({
    width: `${size.width}px`,
    left: `${size.left}px`,
  });
}
function Animation(items: string[], active: string, total: number) {
  const pos = items.indexOf(active);
  const left = 0 - 100 * pos;
  return useSpring({
    width: `${100 * total}%`,
    left: `${left}%`,
    overflow: 'hidden',
  });
}

function getMeta(
  reference: RefObject<HTMLUListElement>,
  componentReference: RefObject<HTMLDivElement>,
  position: number
) {
  const child = reference?.current?.children;
  let left = 0;
  const componentProperties = componentReference.current?.getBoundingClientRect();
  if (child && componentProperties) {
    for (let i = 0; i < position; i += 1) {
      left += child[i].getBoundingClientRect().width;
    }
    const { width } = child[position].getBoundingClientRect();
    return { left, width };
  }
  return { left: 0, width: 200 };
}

export const Tab: FC<TabProps> = ({
  activeKey,
  defaultActiveKey,
  children,
  scroll,
  onChange,
}) => {
  const [getActiveKey, setActiveKey] = useState(activeKey);
  const [activeSize, setActiveSize] = useState<{ left: number; width: number }>(
    { left: 0, width: 0 }
  );
  // eslint-disable-next-line unicorn/no-null
  const tabReference = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line unicorn/no-null
  const tabListReference = useRef<HTMLUListElement>(null);
  const memoActiveKey = useMemo(
    () => getActiveKey || defaultActiveKey || getFirstKey(children),
    [children, defaultActiveKey, getActiveKey]
  );
  const totalChildren = useMemo(() => countChild(children), [children]);

  const { TabPanelChildren, tabs } = setTabPanelChildren(
    children,
    memoActiveKey
  );

  useEffect(() => {
    if (
      tabListReference.current?.children &&
      tabReference.current?.getBoundingClientRect
    ) {
      const { left, width } = getMeta(
        tabListReference,
        tabReference,
        tabs.indexOf(memoActiveKey)
      );
      setActiveSize({ left, width });
    }
    if (onChange) onChange(memoActiveKey);
  }, [memoActiveKey]);
  return (
    <div style={{ overflow: 'hidden' }} ref={tabReference}>
      <TabContext.Provider
        value={{
          activeKey: getActiveKey,
          defaultActiveKey: defaultActiveKey || getFirstKey(children),
          toggleActiveKey: setActiveKey,
        }}
      >
        <ul
          role="tablist"
          aria-orientation="horizontal"
          style={{
            display: 'flex',
            width: '100%',
            padding: 0,
            margin: 0,
            position: 'relative',
            overflow: totalChildren > 4 || scroll ? 'scroll' : 'auto',
          }}
          ref={tabListReference}
        >
          {children}
          <animated.div
            className="indicator"
            style={{ ...AnimatedBar(activeSize), width: activeSize.width }}
          />
        </ul>
        <animated.div
          style={{
            ...Animation(tabs, memoActiveKey, totalChildren),
            display: 'flex',
            position: 'relative',
          }}
        >
          {TabPanelChildren.map(({ active, content, tabPanelKey }) => {
            return (
              <div
                key={`${tabPanelKey}-panel`}
                id={`${tabPanelKey}-panel`}
                aria-labelledby={tabPanelKey}
                role="tabpanel"
                aria-hidden={!active}
                style={{ width: '100%' }}
              >
                {content}
              </div>
            );
          })}
        </animated.div>
      </TabContext.Provider>
    </div>
  );
};

export const TabPanel: FC<TabPanelProps> = ({ panelKey, text }) => {
  const { activeKey, defaultActiveKey, toggleActiveKey } = useContext<
    ContextProps
  >(TabContext);

  const active =
    panelKey === activeKey || (!activeKey && panelKey === defaultActiveKey);
  const [reference] = useMeasure({ polyfill });
  return (
    <li
      role="presentation"
      key={`${panelKey}-li`}
      data-tab-active={active}
      style={{ listStyle: 'none', width: '100%' }}
      className="tab"
      ref={reference}
    >
      <button
        style={{
          padding: '0 8px',
          outline: 'none',
          backgroundColor: 'white',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '90px',
          border: 'none',
          height: '40px',
        }}
        type="button"
        role="tab"
        key={panelKey}
        id={panelKey}
        aria-selected={active}
        tabIndex={0}
        aria-controls={`${panelKey}-panel`}
        onClick={() => toggleActiveKey(panelKey)}
      >
        <span
          style={{
            fontSize: '14px',
            color: active ? '#ff14ea' : 'black',
            fontWeight: active ? 'bold' : 'normal',
          }}
        >
          {text}
        </span>
      </button>
    </li>
  );
};
