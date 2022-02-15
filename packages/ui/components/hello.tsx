import { add } from '@test/utils'
import React, { FC } from 'react'

export const Hello: FC = () => (
  <>
    {'Hello!'}
    {add(1, 2)}
  </>
)
