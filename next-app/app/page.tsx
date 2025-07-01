import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import './globals.css'; // adjust path if needed

export default function Home() {
  return (
    <main>
    <h1>hello</h1>
    <Link href="/users">users page</Link>
    <ProductCard></ProductCard>
    </main>
  )
}
