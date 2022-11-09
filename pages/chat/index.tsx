import { IconButton, Textfield } from "../../src/components/atoms";
import { SectionLayout, StoreLayout } from "../../src/template";

export default function Chat() {
  return (
    <StoreLayout
      title="Chat"
      main={
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 m-1">
            <SectionLayout
              title="Daftar Chat"
              main={
                <div className="md:h-screen">
                  <div className="flex border-b items-center cursor-pointer py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                    <IconButton
                      icon="ic:baseline-account-circle"
                      backgroundColor="transparent"
                      color="teal"
                    />
                    <p>Sahabat 1</p>
                  </div>
                  <div className="flex border-b items-center cursor-pointer py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                    <IconButton
                      icon="ic:baseline-account-circle"
                      backgroundColor="transparent"
                      color="teal"
                    />
                    <p>Sahabat 2</p>
                  </div>
                  <div className="flex items-center cursor-pointer py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                    <IconButton
                      icon="ic:baseline-account-circle"
                      backgroundColor="transparent"
                      color="teal"
                    />
                    <p>Sahabat 3</p>
                  </div>
                </div>
              }
            />
          </div>
          <div className="hidden md:flex w-full m-1">
            <div className="bg-teal-500 rounded-lg w-full my-5">
              <div className="bg-white p-4 rounded-t-lg border">
                Irfan Gunawan
              </div>
              <div className="p-1">
                <p className="bg-white mt-5 p-2 shadow w-fit rounded-xl rounded-tl-none">
                  Test Chat
                </p>
                <p className="bg-white mt-5 p-2 shadow w-fit rounded-xl rounded-tl-none">
                  Test Chat Lagi Donk
                </p>
              </div>
              <div className="p-1 relative left-3/4">
                <p className="bg-white mt-5 p-2 shadow rounded-xl w-fit rounded-tr-none">
                  Test Chat
                </p>
                <p className="bg-white mt-5 p-2 shadow rounded-xl w-fit rounded-tr-none">
                  Test Chat Lagi Donk
                </p>
              </div>
              <div className="p-1">
                <p className="bg-white mt-5 p-2 shadow w-fit rounded-xl rounded-tl-none">
                  Test Chat
                </p>
                <p className="bg-white mt-5 p-2 shadow w-fit rounded-xl rounded-tl-none">
                  Test Chat Lagi Donk
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
