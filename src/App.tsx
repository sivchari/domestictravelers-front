import React from 'react'

type Props = {
  name: string
}

const App: React.FC<Props> = ({ name }: Props) => (
  <div className='App'>
    <p>{name}</p>
  </div>
)

export default App
