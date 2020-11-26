package ee.omis;

public class Player extends WorldCharacter {
    private Direction direction = Direction.UP;

    public String getSymbol() {
        return "O";
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public void move() {
        switch (this.direction) {
            case UP -> { if (getyCoord() > 1) { setyCoord(getyCoord()-1); } }
            case DOWN -> { if (getyCoord() < World.getHeight()-1) { setyCoord(getyCoord()+1); } }
            case LEFT -> { if (getxCoord() > 1) { setxCoord(getxCoord()-1); } }
            case RIGHT -> { if (getxCoord() < World.getWidth()-1) { setxCoord(getxCoord()+1); } }
        }
    }
}
