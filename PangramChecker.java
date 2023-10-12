public class PangramChecker {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog"; // Replace with the sentence to check
        System.out.println(isPangram(sentence));
    }

    public static boolean isPangram(String sentence) {
        sentence = sentence.toLowerCase();
        for (char c = 'a'; c <= 'z'; c++) {
            if (sentence.indexOf(c) == -1) {
                return false;
            }
        }
        return true;
    }
}
