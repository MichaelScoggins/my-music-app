import React from 'react'
import Card from '@material-ui/core/card'
import Switch from '@material-ui/core/switch'
import Slider from '@material-ui/core/slider'
import Typography from '@material-ui/core/typography'
import Box from '@material-ui/core/box'
import Select from '@material-ui/core/select'
import { MenuItem } from '@material-ui/core'

export default function Dashboard() {
  const [isOnline, toggleOnline] = React.useState(false)
  const [volume, adjustVolume] = React.useState(20)
  const [quality, adjustQuality] = React.useState('normal')
  const [notifications, x] = React.useState([])

  return (
    <Box width="50%" textAlign="center">
      <Box>
        {isOnline ? (
          <Card>
            <Typography>Online Mode</Typography>
          </Card>
        ) : (
          <Card>
            <Typography>Offline Mode</Typography>
          </Card>
        )}
      </Box>
      <Box>
        <Switch onChange={() => toggleOnline(!isOnline)} />
      </Box>
      <br />
      <Box>
        <Card>
          <Typography>
            {' '}
            Volume
            <Slider step={10} onChange={(e, v) => adjustVolume(v)} />
          </Typography>
        </Card>
      </Box>
      <Box>
        <Card>
          <Typography>Sound Quality</Typography>
          <Select
            labelId="Sound Quality"
            id="select"
            onChange={(e, v) => adjustQuality(e.target.value)}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Normal">Normal</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </Card>
      </Box>
    </Box>
  )
}
