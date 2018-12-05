import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TopProduct from '../../../components/Main/Shop/Home/TopProduct';
import { getCategoryRequest } from './action';
import { selectCategory } from './selector';
import Category from '../../../components/Main/Shop/Home/Category';

const mapStateToProps = createStructuredSelector({
  category: selectCategory(),
});

const mapDispatchToProps = (dispatch) => ({
  getCategoryRequest: (params) => dispatch(getCategoryRequest(params)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
