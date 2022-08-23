import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Info from '../components/Info'
import Homepages from '../components/Homepages'
import ShopAndAccount from '../components/ShopAndAccount'
import Headers from '../components/Headers'
import MegaMenuDropdown from '../components/MegaMenuDropdown'
import Blog from '../components/Blog'
import ProductCard from '../components/ProductCard'
import Responsive from '../components/Responsive' 
import Features from '../components/Features'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Info />
      <Homepages />
      <ShopAndAccount />
      <Headers />
      <MegaMenuDropdown /> 
      <Blog />
      <ProductCard />
      <Responsive />
      <Features />
      <Footer />
    </div>
  )
}
