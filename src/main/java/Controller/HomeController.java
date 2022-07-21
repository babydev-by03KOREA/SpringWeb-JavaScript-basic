package Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
    //  사용자로부터 '/' 요청을 받으면 main() 메서드를 실행한다.
    @RequestMapping(value = "/index.do", method = RequestMethod.GET)
    public String main(Model model) {
        String language = "Java";
        String FrameWork = "Spring";
        model.addAttribute("PL", language);
        model.addAttribute("FW", FrameWork);
        model.addAttribute("date", new java.util.Date());
        return "index";
    }

}