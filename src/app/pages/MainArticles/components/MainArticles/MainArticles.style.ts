import { styled } from '@styles/themes/defaultTheme';
import { Link } from 'react-router-dom';

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

export const ArticleButton = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  width: ${(props: { width?: string }) => (props.width ? props.width : '100%')};
  background-color: ${props => props.theme.colors.darkViolet};
  border-radius: 5px;
  color: ${props => props.theme.colors.light};
  font-size: 16px;
  line-height: 24px;
`;
