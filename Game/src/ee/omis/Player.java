package ee.omis;

public class Player {
    private static double health;
    private Direction direction;
    private int xCoord = 3;
    private int yCoord = 2;
    private String symbol = "O";

    public int getxCoord() {
        return xCoord;
    }

    public int getyCoord() {
        return yCoord;
    }

    public String getSymbol() {
        return symbol;
    }

    private void randomiseCoordinates() {
        this.xCoord = 2;
        this.yCoord = 3;
    }

    public void move() {

    }
}
