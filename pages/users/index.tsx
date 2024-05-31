import { IUser } from '@/type/type';
import axios from 'axios';
import Link from 'next/link';

export default function Users({ users }: { users: IUser[] }) {
  console.log(users);

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      {users.map((elm) => {
        return (
          <div
            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center"
            key={elm.id}
          >
            <div className="p-6">
              <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                {elm.name} {elm.username}
              </h5>

              <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
                {elm.email}
              </p>

              <Link
                href={'/users/' + elm.id}
                className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                See More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  return {
    props: {
      users: data,
    },
  };
};
