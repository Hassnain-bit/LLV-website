import React from "react";
import logo from "../../images/logo.png";
import VisibilitySensor from "react-visibility-sensor";

export default function SplashScreen() {
  return (
    <>
      {/* <div className="transition fixed inset-0 bg-[red] flex items-center justify-center z-10">
        Hello world!
      </div> */}

      {/* <VisibilitySensor>
        {({ isVisible }) => (
          <div
            className={
              isVisible
                ? "my-transition opacity-100 fixed inset-0 bg-[red] flex items-center justify-center z-10"
                : "my-transition opacity-0 fixed inset-0 bg-[blue] flex items-center justify-center z-10"
            }
          >
            I am Hello
          </div>
        )}
      </VisibilitySensor> */}

      <VisibilitySensor>
        {({ isVisible }) => (
          <div className={isVisible ? "background active" : "background"}>
            <div
              className={isVisible ? "my-transition active" : "my-transition"}
            >
              <div className={isVisible ? "logo active" : "logo"}>
                <img className="w-10" src={logo} alt="logo-img" />
              </div>
            </div>

            <div
              className={
                isVisible
                  ? "my-transition-slogan active"
                  : "my-transition-slogan"
              }
            >
              <div className={isVisible ? "slogan active" : "slogan"}>
                <h1 className="text-center font-semibold text-lg xl:text-xl">Lifelong Vitality<br/>Program</h1>
                <h2 className="text-center font-medium text-lg xl:text-xl text-[#405F53] mt-4">Look, feel, live,<br/>younger, longer</h2>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </>
  );
}
