import { ReactNode } from 'react'
import { Card } from '@mui/material'

interface GeneralCardProps {
  children: ReactNode
}

const GeneralCard = ({ children }: GeneralCardProps) => (
  <Card
    sx={{
      width: '800px',
      borderRadius: '5px',
      border: '1px solid  rgba(255,255,255,0.2)',
      padding: '0 1rem',
      marginBottom: '2rem',
    }}
  >
    {children}
  </Card>
)

export default GeneralCard
