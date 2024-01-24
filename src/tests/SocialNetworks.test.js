import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SocialNetworks from "@/app/components/SocialNetworks/SocialNetworks";

describe("SocialNetworks", () => {
    test("renders social network icons", () => {
    render(<SocialNetworks customClass="test-class" />);

    // Verificar que los íconos de las redes sociales estén presentes en el DOM

    const instagramIcon = screen.getByAltText("Instagram Icon");
    const twitterIcon = screen.getByAltText("Twitter Icon");
    const telegramIcon = screen.getByAltText("Telegram Icon");
    const tiktokIcon = screen.getByAltText("TikTok Icon");

    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(telegramIcon).toBeInTheDocument();
    expect(tiktokIcon).toBeInTheDocument();

    // Verificar que los enlaces tengan el atributo target="_blank"
    
    const instagramLink = screen.getByRole("link", { name: "Instagram Icon" });
    const twitterLink = screen.getByRole("link", { name: "Twitter Icon" });
    const telegramLink = screen.getByRole("link", { name: "Telegram Icon" });
    const tiktokLink = screen.getByRole("link", { name: "TikTok Icon" });

    expect(instagramLink).toHaveAttribute("target", "_blank");
    expect(twitterLink).toHaveAttribute("target", "_blank");
    expect(telegramLink).toHaveAttribute("target", "_blank");
    expect(tiktokLink).toHaveAttribute("target", "_blank");
    });
});
