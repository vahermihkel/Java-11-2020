package ee.omis;

public class Enemy extends WorldCharacter {
    private static double health = 10.0;
    private boolean isVisible = true;

    public Enemy(int playerX, int playerY) {
        if (playerX == getxCoord() && playerY == getyCoord()) {

        }
    }

    public String getSymbol() {
        return "X";
    }

    public boolean isVisible() {
        return isVisible;
    }
}
