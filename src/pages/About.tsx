import HomeLayout from '../layouts/HomeLayout';

export default function About() {
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-full ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">About</h1>
          <p className="text-center">
            Vitesse react is a configurable react starter template based on Vite, inspired by{' '}
            <a
              className="text-indigo-300 visited:text-indigo-400"
              href="https://github.com/antfu/vitesse"
              target="_blank"
              rel="noreferrer noopener"
            >
              Vitesse
            </a>
            .
          </p>
        </div>
      </div>
    </HomeLayout>
  );
}
