import React, { useState } from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

type SwitchColor = {
  color: 'primary' | 'secondary' | 'default'
}

const SliderButton: React.FC<SwitchColor> = ({ color }: SwitchColor) => {
  const [hidden, setHidden] = useState(false)

  const handleHiddenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHidden(e.target.checked)
  }

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={hidden}
            onChange={handleHiddenChange}
            color={color}
          />
        }
        label='Hidden'
      />
    </div>
  )
}

export default SliderButton
