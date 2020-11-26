package ee.omis;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        World world = new World(5,10);
        Player player = new Player();
        Enemy enemy = new Enemy(player.getxCoord(), player.getyCoord());
        Questmaster questmaster = new Questmaster();
        world.setCharacters(Arrays.asList(questmaster, enemy, player));

        world.render();

        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        while(!input.equals("end")) {
            switch (input) {
                case "w" -> player.setDirection(Direction.UP);
                case "d" -> player.setDirection(Direction.RIGHT);
                case "s" -> player.setDirection(Direction.DOWN);
                case "a" -> player.setDirection(Direction.LEFT);
            }
            player.move();
            world.render();
            System.out.println(input);
            input = scanner.nextLine();
        }
    }
}
