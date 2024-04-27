import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import SearchServices from '../components/SearchServices'
import Services from '../components/Services'

const Main = () => {
    return (
        <div>
            <Banner />
            <About />
            <SearchServices />
            <Services />
        </div>
    )
}

export default Main