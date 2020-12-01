package ee.omis.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @GetMapping("/hi")
    public String printHello(
            @RequestParam(value="msg", defaultValue = "Teretere") int helloMessage,
            Model model) {
        model.addAttribute("message", helloMessage);
        return "hello";
    }

    @GetMapping("/calculate")
    public String calculateNumbers(
            @RequestParam(value="num1", defaultValue = "1") int num1,
            @RequestParam(value="num2", defaultValue = "1") int num2,
            Model model) {
        model.addAttribute("num1", num1);
        model.addAttribute("num2", num2);
        model.addAttribute("sum", num1+num2);
        return "calculate";
    }
}
