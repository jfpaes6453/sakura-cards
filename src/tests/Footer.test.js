import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/Footer/Footer";
import { useRouter } from "next/navigation";


// Mockear el useRouter para que las pruebas no fallen
jest.mock('next/navigation');

// Mockear las funciones necesarias de next/router
const mockedRouter = {
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
        on: jest.fn(),
        off: jest.fn(),
    },
    isFallback: false,
};

// Configurar el router mockeado antes de cada prueba
beforeEach(() => {
    useRouter.mockReturnValue(mockedRouter);
});

test('renders social networks, redirect icons, and copyright text', () => {
    render(<Footer />);

    // Verificar que el componente SocialNetworks esté presente en el DOM
    const socialNetworks = screen.getByTestId('social-networks');
    expect(socialNetworks).toBeInTheDocument();

    //Verificar que el componente RedirectIconSet esté presente en el DOM
    const redirectIconSet = screen.getByTestId('redirect-icons');
    expect(redirectIconSet).toBeInTheDocument();

    // Verificar que el texto de copyright esté presente en el DOM
    const copyrightText = screen.getByText(/© Copyright 2024 Sakura Tarot/i);
    expect(copyrightText).toBeInTheDocument();
});
