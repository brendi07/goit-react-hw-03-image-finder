import { Component } from 'react';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
  searchName:'',
  }
  
  searchNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() })
  }

  searchSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      alert('Fill search filed')
      return
    }

    this.props.onSubmit(this.state.searchName)
    this.setState({searchName:''})
  }


  render() {
    return (
      <SearchbarHeader >
        <SearchForm onSubmit={this.searchSubmit}>
          <SearchFormButton type="submit" >
            <SearchFormButtonLabel >
              Search
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.searchNameChange}
          />
        </SearchForm>
      </SearchbarHeader>
    ); 
    }
}

export default Searchbar