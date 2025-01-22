import { useTabContext } from './use-tab-context';

interface TabProps {
  label: string;
  tabID: string;
}

export const Tab = ({ label, tabID }: TabProps) => {
  const { activeTabID, setActiveTabID } = useTabContext();

  return (
    <span
      className={
        'me-2 py-4 pr-10 rounded-t-lg border-b-2 inline-block  ' +
        (activeTabID === tabID
          ? ' text-gray-600 border-gray-600 active dark:text-gray-500 dark:border-gray-500'
          : 'cursor-pointer border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300')
      }
      onClick={() => {
        setActiveTabID(tabID);
      }}
    >
      <h2>{label}</h2>
    </span>
  );
};
