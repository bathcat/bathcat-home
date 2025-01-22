import { Tab } from './Tab';

interface TabGroupProps {
  tabs: Array<{ tabID: string; label: string }>;
  activeTabID?: string;
  children: React.ReactNode;
}

export const TabGroup = (props: TabGroupProps) => {
  return (
    <>
      <div className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        {props.tabs.map(tab => (
          <Tab key={tab.tabID} label={tab.label} tabID={tab.tabID} />
        ))}
      </div>
      <div>{props.children}</div>
    </>
  );
};
