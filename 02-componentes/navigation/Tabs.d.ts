import * as React from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  /** Optional count/badge shown after the label. */
  badge?: string | number;
}

export interface TabsProps {
  tabs: TabItem[];
  /** Controlled active id; omit for uncontrolled. */
  value?: string;
  onChange?: (id: string) => void;
}

/** Underline-style tab navigation with a cyan active indicator. */
export function Tabs(props: TabsProps): JSX.Element;
