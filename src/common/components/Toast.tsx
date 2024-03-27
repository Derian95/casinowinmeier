import  { FC } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";

interface ToastProps {}

export const Toast: FC<ToastProps> = ({}) => {
  return (
    <Toaster
      toastOptions={{ duration: 2700 }}
      position="top-right"
      containerStyle={{ top: "50px" }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== "loading" && (
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="text-red-700 p-2 text-xs"
                >
                  Cerrar
                </button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

