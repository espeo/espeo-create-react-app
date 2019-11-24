import { styled } from '@styles/themes/defaultTheme';

export const Select = styled.select`
  height: 20px;
  width: 80px;
  margin-right: 2%;
  border-radius: 4px;
  border-color: ${props => props.theme.colors.darkViolet};
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: center;
  margin-top: 3%;
`;

export const ArticleWrapper = styled.div`
  width: 29%;
  padding-right: 2%;
  padding-left: 2%;
  padding-top: 2%;
`;
export const FilterButtonWrapper = styled.div`
  padding-left: 2%;
`;
export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 2%;
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-right: 0.5%;
`;
