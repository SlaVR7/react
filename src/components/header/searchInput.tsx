import { Component } from 'react';
import { SearchInputProps } from '../../interfaces';

class SearchInput extends Component<SearchInputProps> {
  componentDidMount() {
    if (localStorage.getItem('term')) {
      this.setState({ inputValue: localStorage.getItem('term') });
    }
  }

  render() {
    return (
      <input
        className={'search-input'}
        type="text"
        placeholder="Enter your search query"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default SearchInput;
