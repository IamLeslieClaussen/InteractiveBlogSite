import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from '../Navbar'

describe('Navbar Component', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    
    expect(screen.getByText('lamalog')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    
    // Use getAllByText since links appear in both mobile and desktop menus
    expect(screen.getAllByText('Home')).toHaveLength(2)
    expect(screen.getAllByText('Trending')).toHaveLength(2)
    expect(screen.getAllByText('Most Popular')).toHaveLength(2)
    expect(screen.getAllByText('About')).toHaveLength(2)
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navbar />)
    
    const hamburgerButton = screen.getByText('☰')
    
    // Initially shows hamburger
    expect(hamburgerButton).toBeInTheDocument()
    
    // Click to open menu
    fireEvent.click(hamburgerButton)
    
    // Should now show X
    expect(screen.getByText('X')).toBeInTheDocument()
  })

  it('renders login button', () => {
    render(<Navbar />)
    
    const loginButtons = screen.getAllByText('Login')
    expect(loginButtons).toHaveLength(2) // Desktop and mobile versions
  })
})
