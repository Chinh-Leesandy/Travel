import { useColorMode, IconButton, Box } from '@chakra-ui/react'
import IconDark from '../../../../assets/IconDark'
import IconLight from '../../../../assets/IconLight'

const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Box position='relative'>
      <IconButton
        icon={isDark ? <IconDark /> : <IconLight />}
        onClick={toggleColorMode}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        variant='ghost'
        fontSize='10px'
        _focusVisible={undefined}
      />
    </Box>
  )
}

export default ColorModeSwitcher
