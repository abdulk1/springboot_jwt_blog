package demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping("/nfl") /*
                             * Maps to all HTTP actions by default (GET,POST,..)
                             */
    public @ResponseBody String getUsers() {
        return "[{\"team\":\"Steelers\", \"wins\":\"6\", \"losses\":\"2\"},"
                + "{\"team\":\"Patriots\",\"wins\":\"6\", \"losses\":\"4\"},{\"team\":\"Cowboys\", \"wins\":\"5\", \"losses\":\"3\"},"
                + "{\"team\":\"49ers\", \"wins\":\"5\", \"losses\":\"1\"},{\"team\":\"Packers\", \"wins\":\"5\", \"losses\":\"1\"},"
                + "{\"team\":\"Giants\", \"wins\":\"4\", \"losses\":\"1\"},{\"team\":\"Broncos\", \"wins\":\"3\", \"losses\":\"5\"},"
                + "{\"team\":\"Raiders\", \"wins\":\"3\", \"losses\":\"2\"}, {\"team\":\"Redskins\", \"wins\":\"3\", \"losses\":\"2\"},"
                + "{\"team\":\"Dolphins\", \"wins\":\"2\", \"losses\":\"3\"}, {\"team\":\"Colts\", \"wins\":\"2\", \"losses\":\"2\"},"
                + "{\"team\":\"Ravens\", \"wins\":\"2\", \"losses\":\"0\"}, {\"team\":\"Rams\", \"wins\":\"1\", \"losses\":\"2\"},"
                + "{\"team\":\"Seahawks\", \"wins\":\"1\", \"losses\":\"2\"}, {\"team\":\"Chiefs\", \"wins\":\"1\", \"losses\":\"1\"},"
                + "{\"team\":\"Bears\", \"wins\":\"1\", \"losses\":\"1\"}, {\"team\":\"Jets\", \"wins\":\"1\", \"losses\":\"0\"},"
                + "{\"team\":\"Buccaneers\", \"wins\":\"1\", \"losses\":\"0\"}, {\"team\":\"Saints\", \"wins\":\"1\", \"losses\":\"0\"},"
                + "{\"team\":\"Vikings\", \"wins\":\"0\", \"losses\":\"4\"}, {\"team\":\"Bills\", \"wins\":\"0\", \"losses\":\"4\"},"
                + "{\"team\":\"Eagles\", \"wins\":\"0\", \"losses\":\"3\"}, {\"team\":\"Bengals\", \"wins\":\"0\", \"losses\":\"2\"},"
                + "{\"team\":\"Falcons\", \"wins\":\"0\", \"losses\":\"2\"}, {\"team\":\"Panthers\", \"wins\":\"0\", \"losses\":\"2\"},"
                + "{\"team\":\"Chargers\", \"wins\":\"0\", \"losses\":\"1\"}, {\"team\":\"Titans\", \"wins\":\"0\", \"losses\":\"1\"},"
                + "{\"team\":\"Cardinals\", \"wins\":\"1\", \"losses\":\"0\"}, {\"team\":\"Browns\", \"wins\":\"0\", \"losses\":\"0\"},"
                + "{\"team\":\"Lions\", \"wins\":\"0\", \"losses\":\"0\"}, {\"team\":\"Jaguars\", \"wins\":\"0\", \"losses\":\"0\"},"
                + "{\"team\":\"Texans\", \"wins\":\"0\", \"losses\":\"0\"}]";
    }

}
