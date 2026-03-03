import { 
  Authenticator, 
  Flex, 
  Heading, 
  View,
  Text 
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function CoachBot() {
  return (
    <View padding="1rem" backgroundColor="background">
      <Text>Coach Bot interface coming soon...</Text>
    </View>
  );
}

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Flex 
          direction="column" 
          maxWidth="800px" 
          margin="0 auto" 
          padding="1rem"
          style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}
        >
          <Flex justifyContent="space-between" alignItems="center" marginBottom="1rem">
            <Heading level={1}>Soccer Coach Bot</Heading>
            <button onClick={signOut}>Sign Out</button>
          </Flex>
          <CoachBot />
        </Flex>
      )}
    </Authenticator>
  );
}
