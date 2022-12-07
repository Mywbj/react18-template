import { FC } from 'react'

interface IProps {
  name: string
}

const App: FC<IProps> = (props) => {
  return <div>{props.name}</div>
}

export default App
