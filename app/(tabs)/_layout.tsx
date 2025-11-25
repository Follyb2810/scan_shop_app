import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export const unstable_settings = {
  initialRouteName: "deal/index",
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#9333EA",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

        // COLORS FOR TABS
        tabBarActiveTintColor: "#9333EA", // purple icons
        tabBarInactiveTintColor: "#6B7280", // soft gray icons
        tabBarActiveBackgroundColor: "rgba(147, 51, 234, 0.12)", // subtle purple background

        // BEAUTIFUL TAB BAR STYLING
        tabBarStyle: {
          backgroundColor: "#ffffff",
          // borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.1,
          // height: 62,
          // paddingBottom: 6,
          // paddingTop: 6,
          // backgroundColor: "#6366F1",
          borderTopWidth: 0,
          // elevation: 0,
          // shadowOpacity: 0,
          paddingHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen
        name="deal"
        options={{
          headerShown: false,
          title: "Deals",
          tabBarIcon: ({ color }) => (
            <Feather name="tag" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search/index"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="scan/index"
        options={{
          headerShown: false,
          title: "Scan",
          tabBarIcon: ({ color }) => (
            <Feather name="camera" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(store)"
        options={{
          headerShown: false,
          title: "Store",
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// import { Tabs } from "expo-router";
// import Feather from "@expo/vector-icons/Feather";
// import AntDesign from "@expo/vector-icons/AntDesign";

// export const unstable_settings = {
//   initialRouteName: "deal/index",
// };

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShadowVisible: false,
//         headerStyle: {
//           backgroundColor: "#6366F1",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//         tabBarActiveTintColor: "#9333EA",
//         tabBarInactiveTintColor: "# f4511e",
//         tabBarActiveBackgroundColor: "#6366F1",
//         tabBarStyle: {
// backgroundColor: "#6366F1",
// borderTopWidth: 0,
// elevation: 0,
// shadowOpacity: 0,
// paddingHorizontal: 10,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="deal"
//         options={{
//           headerShown: false,
//           title: "Deals",
//           tabBarIcon: ({ color, focused }) =>
//             focused ? (
//               <Feather name="tag" size={24} color="white" />
//             ) : (
//               <Feather name="tag" size={24} color={color} />
//             ),
//         }}
//       />

//       <Tabs.Screen
//         name="search/index"
//         options={{
//           headerShown: false,
//           title: "Search",
//           tabBarIcon: ({ color, focused }) =>
//             focused ? (
//               <Feather name="search" size={24} color="white" />
//             ) : (
//               <Feather name="search" size={24} color={color} />
//             ),
//         }}
//       />

//       <Tabs.Screen
//         name="index"
//         // options={{
//         //   headerShown: false,
//         //   title: "Scan",
//         //   tabBarIcon: ({ color, focused }) =>
//         //     focused ? (
//         //       <Feather name="camera" size={24} color="white" />
//         //     ) : (
//         //       <Feather name="camera" size={24} color={color} />
//         //     ),
//         // }}
//         options={{
//           href: null,
//         }}
//       />

//       <Tabs.Screen
//         name="scan/index"
//         options={{
//           headerShown: false,
//           title: "Scan",
//           tabBarIcon: ({ color, focused }) =>
//             focused ? (
//               <Feather name="shopping-bag" size={24} color="white" />
//             ) : (
//               <Feather name="shopping-bag" size={24} color={color} />
//             ),
//         }}
//       />
//       <Tabs.Screen
//         name="(store)"
//         options={{
//           headerShown: false,
//           title: "Store",
//           tabBarIcon: ({ color, focused }) =>
//             focused ? (
//               <Feather name="shopping-bag" size={24} color="white" />
//             ) : (
//               <Feather name="shopping-bag" size={24} color={color} />
//             ),
//         }}
//       />
//     </Tabs>
//   );
// }
