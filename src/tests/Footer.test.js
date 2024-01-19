import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/Footer/Footer";


describe('Footer', () => {
    test('renders social networks and copyright text', () => {
      render(<Footer />);
  
      // Verificar que el componente SocialNetworks esté presente en el DOM
      const socialNetworks = screen.getByTestId('social-networks');
      expect(socialNetworks).toBeInTheDocument();
  
      // Verificar que el texto de copyright esté presente en el DOM
      const copyrightText = screen.getByText(/© Copyright 2024 Clow Blossom Oracle/i);
      expect(copyrightText).toBeInTheDocument();
    });
  });