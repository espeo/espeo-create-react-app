import React, { FC } from 'react';
import { MainTitle } from '@core/components';
import { AppWrapper, TitleWrapper } from '@core/styles/components';

export const NotFound: FC = () => (
  <AppWrapper className="main-page">
    <TitleWrapper>
      <MainTitle text="Page not found" />
    </TitleWrapper>
  </AppWrapper>
);
