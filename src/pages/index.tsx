import {Chip, Chips} from '@mantine/core'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return<Chips>
    <Chip value="react">React</Chip>
    <Chip value="ng">Angular</Chip>
    <Chip value="svelte">Svelte</Chip>
    <Chip value="vue">Vue</Chip>
  </Chips>
}

export default Home
