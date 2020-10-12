import { Dispatch, SetStateAction, ReactNode } from 'react';

export interface TabPanelProps {
  panelKey: string;
  /**
   * Texto do item, deve ter no máximo duas palavras
   */
  text: string;
}

export interface TabProps {
  /**
   * Define qual a tab ativa
   */
  activeKey?: string;
  /**
   * Define qual a tab de ínicio, `activeKey` tem prioridade
   * @default first tab
   */
  defaultActiveKey?: string;
  /**
   * Se o número de tabs for maior que 4, scroll passa a valer true
   * @default false
   */
  scroll?: boolean;

  onChange?: (key: string) => void;
}

export interface ContextProps
  extends Pick<TabProps, 'activeKey' | 'defaultActiveKey'> {
  toggleActiveKey: Dispatch<SetStateAction<string | undefined>>;
}

export interface TabItem {
  tabPanelKey: string;
  content: ReactNode;
  active: boolean;
}
