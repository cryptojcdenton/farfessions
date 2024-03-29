import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box, Button } from "@chakra-ui/react";

const MetamaskIcon = ({ width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height="100%"
      viewBox="0 0 212 189"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#CDBDB2"
          d="M60.75 173.25L88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875z"
        ></path>
        <path
          fill="#CDBDB2"
          d="M105.75 173.25L132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875z"
          transform="matrix(-1 0 0 1 256.5 0)"
        ></path>
        <path
          fill="#393939"
          d="M90.563 152.438L88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188z"
        ></path>
        <path
          fill="#F89C35"
          d="M75.375 27L88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27z"
        ></path>
        <path
          fill="#F89D35"
          d="M16.313 96.188L0.563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813z"
        ></path>
        <path
          fill="#D87C30"
          d="M46.125 101.25L92.25 102.375 87.188 126 65.25 120.375z"
        ></path>
        <path
          fill="#EA8D3A"
          d="M46.125 101.813L65.25 119.813 65.25 137.813z"
        ></path>
        <path
          fill="#F89D35"
          d="M65.25 120.375L87.75 126 95.063 150.188 90 153 65.25 138.375z"
        ></path>
        <path
          fill="#EB8F35"
          d="M65.25 138.375L60.75 173.25 90.563 152.438z"
        ></path>
        <path
          fill="#EA8E3A"
          d="M92.25 102.375L95.063 150.188 86.625 125.719z"
        ></path>
        <path
          fill="#D87C30"
          d="M39.375 138.938L65.25 138.375 60.75 173.25z"
        ></path>
        <path
          fill="#EB8F35"
          d="M12.938 188.438L60.75 173.25 39.375 138.938 0.563 141.75z"
        ></path>
        <path
          fill="#E8821E"
          d="M88.875 58.5L64.688 78.75 46.125 101.25 92.25 102.938z"
        ></path>
        <path
          fill="#DFCEC3"
          d="M60.75 173.25L90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625z"
        ></path>
        <path
          fill="#DFCEC3"
          d="M121.5 173.25L150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625z"
          transform="matrix(-1 0 0 1 272.25 0)"
        ></path>
        <path
          fill="#393939"
          d="M70.313 112.5L64.125 125.438 86.063 119.813z"
          transform="matrix(-1 0 0 1 150.188 0)"
        ></path>
        <path fill="#E88F35" d="M12.375 0.563L88.875 58.5 75.938 27z"></path>
        <path
          fill="#8E5A30"
          d="M12.375.563L2.25 31.5l5.625 33.75-3.937 2.25 5.625 5.063-4.5 3.937 6.187 5.625L7.313 85.5l9 11.25L58.5 83.813c20.625-16.5 30.75-24.938 30.375-25.313S63 38.813 12.375.563z"
        ></path>
        <g transform="matrix(-1 0 0 1 211.5 0)">
          <path
            fill="#F89D35"
            d="M16.313 96.188L0.563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813z"
          ></path>
          <path
            fill="#D87C30"
            d="M46.125 101.25L92.25 102.375 87.188 126 65.25 120.375z"
          ></path>
          <path
            fill="#EA8D3A"
            d="M46.125 101.813L65.25 119.813 65.25 137.813z"
          ></path>
          <path
            fill="#F89D35"
            d="M65.25 120.375L87.75 126 95.063 150.188 90 153 65.25 138.375z"
          ></path>
          <path fill="#EB8F35" d="M65.25 138.375L60.75 173.25 90 153z"></path>
          <path
            fill="#EA8E3A"
            d="M92.25 102.375L95.063 150.188 86.625 125.719z"
          ></path>
          <path
            fill="#D87C30"
            d="M39.375 138.938L65.25 138.375 60.75 173.25z"
          ></path>
          <path
            fill="#EB8F35"
            d="M12.938 188.438L60.75 173.25 39.375 138.938 0.563 141.75z"
          ></path>
          <path
            fill="#E8821E"
            d="M88.875 58.5L64.688 78.75 46.125 101.25 92.25 102.938z"
          ></path>
          <path
            fill="#393939"
            d="M70.313 112.5L64.125 125.438 86.063 119.813z"
            transform="matrix(-1 0 0 1 150.188 0)"
          ></path>
          <path fill="#E88F35" d="M12.375 0.563L88.875 58.5 75.938 27z"></path>
          <path
            fill="#8E5A30"
            d="M12.375.563L2.25 31.5l5.625 33.75-3.937 2.25 5.625 5.063-4.5 3.937 6.187 5.625L7.313 85.5l9 11.25L58.5 83.813c20.625-16.5 30.75-24.938 30.375-25.313S63 38.813 12.375.563z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

const WalletIcon = () => {
  return (
    <Box display={"flex"}>
      <Box rounded="full" background="background.overlay" p={1}>
        <Box fontSize={20}>🌈</Box>
      </Box>
      <Box rounded="full" background="background.overlay" p={1}>
        <MetamaskIcon />
      </Box>
    </Box>
  );
};
export const RainbowConnectButton = ({
  titleWhenConnected,
  titleWhenDisconencted,
  containerStyle = {},
  ...props
}) => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted, openAccountModal }) => {
        const onClick = () => {
          if (!mounted || !account || !chain) {
            openConnectModal();
          } else {
            props?.onClick?.() || openAccountModal();
          }
        };
        return (
          <Box
            w="100%"
            {...containerStyle}
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Button
                    leftIcon={<WalletIcon />}
                    {...props}
                    onClick={onClick}
                  >
                    {titleWhenDisconencted || "Wallets"}
                  </Button>
                );
              }
              return (
                <Button {...props} leftIcon={<WalletIcon />} onClick={onClick}>
                  {titleWhenConnected || account.displayName}
                </Button>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};
