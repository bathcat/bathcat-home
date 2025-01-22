import { useTabContext } from './use-tab-context';


interface TabContentProps {
  tabID: string;
  children: React.ReactNode;
}

export const TabContent = ({ tabID, children }: TabContentProps) => {
  const { activeTabID } = useTabContext();

  return (
    <div className={activeTabID === tabID ? 'block' : 'hidden'}>{children}</div>
  );
};
