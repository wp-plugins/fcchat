document.write((FCChatConfig.styles.chat_toolbox.fixed&&!window['fc_pop_up']&&top==self?"<div id='fc_chat_floating_div' style='position: fixed; z-index: 2147480320;visibility: visible;" +
					"left:" + (FCChatConfig.styles.chat_toolbox.fixed_pos=="top-left"||FCChatConfig.styles.chat_toolbox.fixed_pos=="bottom-left"?"-1px;" : + jGo.util.getSWidth()-(FCChatConfig.styles.chat_toolbox.width+26) + "px;") +
					"top:" + (FCChatConfig.styles.chat_toolbox.fixed_pos=="top-left"||FCChatConfig.styles.chat_toolbox.fixed_pos=="top-right"?"-1px;" : + jGo.util.getSHeight()-FCChatConfig.styles.chat_toolbox.height + "px;") +
					"'>":"") +
 					"<div id='jGo_app' class='jGo_myapp'>" +
						"<div id='fastcatchatentry' class='jGo_app jGo_myapp' style='position:absolute;width:"+FCChatConfig.styles.chat_toolbox.width+"px;height:"+FCChatConfig.styles.chat_toolbox.height+"px'>&nbsp;</div>"+((!FCChatConfig.styles.chat_toolbox.absolute_positioning&&!FCChatConfig.styles.chat_toolbox.fixed)?"<div id='fastcatchatdummy' style='width:"+FCChatConfig.styles.chat_toolbox.width+"px;height:"+FCChatConfig.styles.chat_toolbox.height+"px'>&nbsp;</div>":"")+
					"</div>" +
				(FCChatConfig.styles.chat_toolbox.fixed&&!window['fc_pop_up']&&top==self?"</div>":""));