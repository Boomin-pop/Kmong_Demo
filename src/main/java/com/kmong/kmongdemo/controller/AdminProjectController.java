package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.ProjectRequestDTO;
import com.kmong.kmongdemo.service.AdminProjectRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class AdminProjectController {

    @Autowired
    private AdminProjectRequestService prService;

    @GetMapping("/admin/project")
    public String adminProject(Model model){
        List<ProjectRequestDTO> projectLists = prService.projectLists();
        model.addAttribute("projectLists", projectLists);
        List<ProjectRequestDTO> projectAdmissionLists=prService.projectAdmissionLists();
        model.addAttribute("projectAdmissionLists", projectAdmissionLists);
        List<ProjectRequestDTO> projectDeleteLists=prService.projectDeleteLists();
        model.addAttribute("projectDeleteLists", projectDeleteLists);

        return "admin/adminProject";
    }

    @GetMapping("/admin/project/{projectRequestNo}")
    public @ResponseBody ProjectRequestDTO projectInfo(@PathVariable("projectRequestNo") int projectRequestNo, Model model){
        ProjectRequestDTO projectInfo=prService.projectInfo(projectRequestNo);
        return projectInfo;
    }

    @PutMapping("/admin/project/{projectRequestNo}")
    public @ResponseBody String projectModify(@RequestBody ProjectRequestDTO projectRequestDTO){
        prService.projectModify(projectRequestDTO);
        return null;
    }

//    삭제 사유
    @PostMapping("/admin/project/{projectRequestNo}")
    public @ResponseBody String projectDeleteR(@RequestBody ProjectRequestDTO projectRequestDTO){
        prService.projectDeleteR(projectRequestDTO);
        return null;
    }

    @PostMapping("/admin/project/delete1")
    public @ResponseBody String deleteProject1(@RequestBody List<ProjectRequestDTO> list){

        for(ProjectRequestDTO projectRequestDTO : list){
            prService.deleteProject(projectRequestDTO);
        }

        return null;
    }

    @PostMapping("/admin/project/delete2")
    public @ResponseBody String deleteProject2(@RequestBody List<ProjectRequestDTO> list){

        for(ProjectRequestDTO projectRequestDTO : list){
            prService.deleteProject(projectRequestDTO);
        }

        return null;
    }

    @PostMapping("admin/project/cancle1")
    public @ResponseBody String projectCancle1(@RequestBody List<ProjectRequestDTO> list){
        for (ProjectRequestDTO projectRequestDTO : list){
            prService.projectCancle1(projectRequestDTO);
        }
        return null;
    }

    @PostMapping("admin/project/cancle2")
    public @ResponseBody String projectCancle2(@RequestBody List<ProjectRequestDTO> list){
        for (ProjectRequestDTO projectRequestDTO : list){
            prService.projectCancle2(projectRequestDTO);
        }
        return null;
    }

    @PutMapping("/admin/project/approve/{projectRequestNo}")
    public @ResponseBody String projectApprove(@RequestBody ProjectRequestDTO projectRequestDTO){
        prService.projectApprove(projectRequestDTO);
        return null;
    }
}
