import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div>
      <p>Coffe Store Page</p>
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
