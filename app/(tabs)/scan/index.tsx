import { ScrollView, View, Text } from "react-native";
import ScanHeader from "../../../components/Scan/ScanHeader";
import ScannerArea from "../../../components/Scan/ScannerArea";
import QuickActionCard from "../../../components/Scan/QuickActionCard";
import RecentScanItem from "../../../components/Scan/RecentScanItem";
import InfoBanner from "../../../components/Scan/InfoBanner";
import { SafeAreaView } from "react-native-safe-area-context";

const ScanScreen = () => {
  const quickActions = [
    { id: 1, title: "Scan Barcode", icon: "barcode", color: "#3b82f6" },
    { id: 2, title: "QR Code", icon: "qr-code", color: "#8b5cf6" },
    { id: 3, title: "Batch Number", icon: "keypad", color: "#ec4899" },
    { id: 4, title: "Photo Verify", icon: "camera", color: "#f59e0b" },
  ];

  const recentScans = [
    {
      id: 1,
      productName: "Organic Honey",
      status: "verified",
      date: "2 hours ago",
      confidence: 98,
    },
    {
      id: 2,
      productName: "Premium Olive Oil",
      status: "verified",
      date: "1 day ago",
      confidence: 95,
    },
    {
      id: 3,
      productName: "Natural Spices",
      status: "warning",
      date: "2 days ago",
      confidence: 67,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        <ScanHeader />
        <ScannerArea />

        <View className="px-4 mt-6">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Quick Verification
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((action) => (
              <QuickActionCard key={action.id} action={action} />
            ))}
          </View>
        </View>

        <View className="px-4 mt-6 mb-6">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Recent Scans
          </Text>
          {recentScans.map((scan) => (
            <RecentScanItem key={scan.id} scan={scan} />
          ))}
        </View>

        <InfoBanner
          title="How Verification Works"
          description="Our AI-powered system checks product authenticity against our database of verified products and manufacturers."
          iconColor="purple"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScanScreen;
