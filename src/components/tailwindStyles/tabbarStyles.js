// tabItem: hover:text-gray-700 dark:hover:text-gray-300

const tabbarStyles = {
  tabbar: 'duration 300 sticky z-50 flex md:hidden flex-row items-center justify-between px-8 h-20 bg-white dark:bg-black visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl',
  tabItem: 'text-gray-400 dark:text-white cursor-pointer w-20 h-full flex items-center justify-center',
  selectedItem: 'bg-gradient-to-t from-white to-gray-100 dark:from-black dark:to-blue-300 border-t-4 border-gray-700 dark:border-blue-300 text-gray-700',
  icon: '-mb-1',
  toggleThemeContainer: 'pl-5 pr-3 -mb-1',
};

export default tabbarStyles;
