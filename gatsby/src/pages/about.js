import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Nav from '../components/nav'
import WeeksRank from '../components/weeksRequiredPerRank'

const SecondPage = () => (
  <Layout>
    <h1>About</h1>
    <Nav />
    <p>This tool has been developed by Pleingaz from the &lt;RETURN&gt; guild in order to help rankers understand the ranking system in World of Warcraft vanilla.</p>
    <p>Most of the formulas used by this tool comes from <a href='http://wowwiki.wikia.com/wiki/Honor_system_(pre-2.0_formulas)#Rank_Points' target='_blank' rel='noopener noreferrer'>wowwiki</a>, honorspy and the LH core.</p>
    <h2>What's ranking ?</h2>
    <p>Ranking is a long process in World of Warcraft Vanilla. It is the PVP progression, gives reward and titles. Every week, on reset (usually on Wednesday), the new ranks are processed server side. Characters compete with other characters in the same faction to gain ranks and get access to powerful rewards.</p>

    <h2>Ranking rewards</h2>
    <p>Some player will rank for the prestige and the experience, most though will rank to get access to the PVP rewards:</p>
    <ul class='compact'>
      <li>Rank 1: Faction Tabard</li>
      <li>Rank 2: PVP tricket</li>
      <li>Rank 3: Blue Cloak and -10% of mount cost, goods and repairs</li>
      <li>Rank 4: Blue Necklace</li>
      <li>Rank 5: Blue bracers</li>
      <li>Rank 6: Access to the officer's quarter/barracks, access to PVP potions and officer Tabard</li>
      <li>Rank 7: Blue boots, blue gloves</li>
      <li>Rank 8: Blue chest, blue leggings</li>
      <li>Rank 9: Battle standard</li>
      <li>Rank 10: blue helm, blue shoulder</li>
      <li>Rank 11: Epic mounts, talking in world defense</li>
      <li>Rank 12: Epic gloves, epic leggings and epic boots</li>
      <li>Rank 13: Epic helm, epic shoulder, epic chest</li>
      <li>Rank 14: Epic weapon and shield</li>
    </ul>

    <h2>Getting honor</h2>
    <p>The first step of ranking, and also the only one you have a clear influence on, is to get Honor. This can be achieved in multiple way, most involving Player vs Player activities.</p>
    <p>The two main ways to get honor is running battleground and killing opposing characters in the world. You also get honor from completing objectives in battleground and killing opposing faction leaders</p>

    <h2>How brackets work</h2>
    <p>Once the week ends (at reset, usually on Wednesday), the honor from all characters having done at least 15 honor kills are compiled in a <Link to='/standings/'>list</Link>, sorted by honor. The more honor you have, the better your standing. The amount of player having done 15 honor kills this week is known as the "pool size".</p>
    <ul class='compact'>
      <li>Braclet 1: all the charaters with 15 HK to top 85.8% of poolsize</li>
      <li>Braclet 2: top 85.8% to top top 71.5% of poolsize</li>
      <li>Braclet 3: top 71.5% to top top 58.7% of poolsize</li>
      <li>Braclet 4: top 58.7% to top 47.7% of poolsize</li>
      <li>Braclet 5: top 47.7% to top 37.7% of poolsize</li>
      <li>Braclet 6: top 37.7% to top 28.7% of poolsize</li>
      <li>Braclet 7: top 28.7% to top 20.7% of poolsize</li>
      <li>Braclet 8: top 20.7% to top 13.7% of poolsize</li>
      <li>Braclet 9: top 13.7% to top 7.7% of poolsize</li>
      <li>Braclet 10: top 7.7% to top 3.7% of poolsize</li>
      <li>Braclet 11: top 3.7% to top 1.7% of poolsize</li>
      <li>Braclet 12: top 1.7% to top 0.7% of poolsize</li>
      <li>Braclet 13: top 0.7% to top 0.2% of poolsize</li>
      <li>Braclet 14: top 0.2% of poolsize</li>
    </ul>
    <p>So for instance, if 1 000 characters kill 15 opposing characters on your faction, the bracket 14 will host the 2 characters with the most honor this week, bracket 13 will host the 12 following (top 0.7% - top 0.2%), etc.</p>
    <p>But if 5 000 characters kill 15 opposing characters on your faction, the bracket 14 will then host the 10 characters with the most honor this week, bracket 13 will host the 25 following (top 0.7% - top 0.2%), etc.</p>
    <p>You can visualize the honor required to enter each bracket on the <Link to='/'>bracket page</Link>.</p>

    <h2>Ranking points</h2>
    <p>Once you know in which bracket you are for the week (depending on your honor this week), you can then calculate how much RP you will earn this specific week.</p>
    <p>You first need to add your earnings :</p>
    <ul class='compact'>
      <li>Braclet 1: 0 RP</li>
      <li>Braclet 2: 400 RP</li>
      <li>Braclet 3: 1 000 RP</li>
      <li>Braclet 4: 2 000 RP</li>
      <li>Braclet 5: 3 000 RP</li>
      <li>Braclet 6: 4 000 RP</li>
      <li>Braclet 7: 5 000 RP</li>
      <li>Braclet 8: 6 000 RP</li>
      <li>Braclet 9: 7 000 RP</li>
      <li>Braclet 10: 8 000 RP</li>
      <li>Braclet 11: 9 000 RP</li>
      <li>Braclet 12: 10 000 RP</li>
      <li>Braclet 13: 11 000 RP</li>
      <li>Braclet 14: 12 000 RP</li>
    </ul>
    <p>You also have to add the delta RP earned within your bracket. This delta is calculated in comparison to other people in the bracket. You can earn between 0 and 1000 RP (0->400 for bracket 1, 0->600 for bracket 2) depending on how close to the honor ceiling of your bracket you are.</p>
    <p>Each week your global RP decays by 20%. To calculate your final weekly adjustment, you substract your decay from your gains. If this amount is negative (ie, you decay more that you earn), you cut in half your weekly adjustment, and if this is still under - 2500 RP, you cap it at -2500 RP (ie, you can not decay more than half a rank per week)</p>
    <p>You know now how much Rank Points you will have, let's see what rank it will give you. You can also calculate your Ranking Points using the <Link to='/'>bracket page</Link></p>

    <h2>RP => rank</h2>
    <p>The Ranking point to Rank is pretty straight forward :</p>
    <ul class='compact'>
      <li>Rank 1: 15 Honor kills</li>
      <li>Rank 2: 2 000RP</li>
      <li>Rank 3: 50 00RP</li>
      <li>Rank 4: 10 000RP</li>
      <li>Rank 5: 15 000RP</li>
      <li>Rank 6: 20 000RP</li>
      <li>Rank 7: 25 000RP</li>
      <li>Rank 8: 30 000RP</li>
      <li>Rank 9: 35 000RP</li>
      <li>Rank 10: 40 000RP</li>
      <li>Rank 11: 45 000RP</li>
      <li>Rank 12: 50 000RP</li>
      <li>Rank 13: 55 000RP</li>
      <li>Rank 14: 60 000RP</li>
    </ul>

    <h2>Timeframe to reach certain ranks</h2>
    <p>Wether you are bracket i + max delta or bracket i+1 yield the same RP so should be considered the same</p>
    <p>the table below show rank progress per week (or per reset). Values are shown in ranks attained</p>
    <WeeksRank />
  </Layout>
)

export default SecondPage
