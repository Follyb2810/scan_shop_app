import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeAreaWrapperProps = {
  children: ReactNode;
  className?: string;
  style?: ViewStyle;
  backgroundColor?: string;
};

const SafeAreaWrapper = ({
  children,
  className = "",
  style = {},
  backgroundColor = "#F3F4F6",
}: SafeAreaWrapperProps) => {
  return (
    <SafeAreaView
      className={`${className} flex-1 bg-gray-50 p-2`}
      style={[{ flex: 1, backgroundColor }, style]}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
