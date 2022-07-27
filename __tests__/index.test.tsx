import { render, screen } from '@testing-library/react'
import Home from 'pages/index'
import { productList } from 'services/listProduct'

describe('Home', () => {
  test('should render correctly the Home', () => {
    const PageHome = render(<Home productList={productList} />)
    expect(PageHome.container).toBeInTheDocument()
  });

  test('renders a heading', () => {
    render(<Home productList={productList} />)
    
    const heading = screen.getByRole('heading', {
      name: /ENCUENTRA LO QUE NECESITAS/i,
    })
    expect(heading).toBeInTheDocument()
  });
})