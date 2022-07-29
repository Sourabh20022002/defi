import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
        <div>
            <h1 className="py-4">Growing protocol Ecosystem</h1>
            <p className="py-4 text-xl">Decentralized finance (DeFi) offers financial instruments without relying on intermediaries such as brokerages, exchanges, or banks by using smart contracts on a blockchain. DeFi platforms allow people to lend or borrow funds from others, speculate on price movements on assets using derivatives, trade cryptocurrencies, insure against risks, and earn interest in savings-like accounts.DeFi uses a layered architecture and highly composable building blocks.</p>

        {/*Card Container*/}
        <div className="grid sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {/*card*/}
            <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract.' />

            <AboutCard icon={<SiFsecure size={40} />} heading='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
            <AboutCard icon={<SiStrapi size={40} />} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
            <AboutCard icon={<VscServerProcess size={40} />} heading='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
        </div>
        </div>
        </div>
            
    </div>
  )
}

export default About