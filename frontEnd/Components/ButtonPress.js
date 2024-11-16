// import React from 'react';
// import { View, Pressable, Text} from 'react-native';
// // import Ionicons from 'react-native-vector-icons/ionicons'; // Import FontAwesome icons
// import styles from '../Styles/button-Styles.js'; // Import styles js file

// // Button function accepts label and theme as properties
// export default function Button({ label, theme, onPressAction }) {
//     // Check if the theme is "primary" to apply specific styles
//   if (theme === 'primary') {
//     return (
//       <View style={styles.buttonContainer}>
//         <Pressable style={styles.button} onPress={onPressAction}>
//           <Text style={styles.buttonLabel}>{label}</Text>
//         </Pressable>
//       </View>
//     );
//   }

//   // Display a default button if theme is not "primary"
//   return (
//     <View style={styles.buttonContainer}>
//       <Pressable style={styles.button} onPress={onPressAction}>
//         <Text style={styles.buttonLabel}>{label}</Text>
//       </Pressable>
//     </View>
//   );
// }

import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from '../Styles/button-Styles.js';

export default function Button({ label, theme, onPress }) {
    console.log('Button rendered with label:', label); // Debug log to confirm rendering

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={theme === 'primary' ? styles.button : styles.defaultButton}
                onPress={() => {
                    console.log('Pressable clicked'); // Debug log to confirm Pressable was clicked
                    onPress(); // Invoke the onPress function
                }}
            >
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}
