const Loader = () => {
  return (
    <div className="loader">
      <div className="flex justify-center text-primary-900 bg-primary-50 dark:text-white dark:bg-primary-900 items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    </div>
  );
};

export default Loader;
